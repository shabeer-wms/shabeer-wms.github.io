import { useCallback, useEffect, useMemo, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  CheckCircle2,
  Coins,
  Contact,
  Crosshair,
  Download,
  FolderKanban,
  Gamepad2,
  Github,
  Linkedin,
  Mail,
  MapPinned,
  MessageCircle,
  Move,
  Phone,
  RefreshCcw,
  Sparkles,
  Star,
  Swords,
  UserRound,
  Wrench,
  Zap
} from 'lucide-react';

type QuestId = 'about' | 'skills' | 'projects' | 'experience' | 'contact';

interface Position {
  x: number;
  y: number;
}

interface QuestDefinition {
  id: QuestId;
  title: string;
  tagline: string;
  xpReward: number;
  coinReward: number;
  position: Position;
  icon: LucideIcon;
  gradient: string;
}

interface SkillNode {
  name: string;
  level: string;
  percent: number;
  tint: string;
}

interface ProjectCard {
  name: string;
  summary: string;
  stack: string[];
}

interface TimelineItem {
  role: string;
  company: string;
  period: string;
}

interface ContactAction {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

interface PersistedState {
  player: Position;
  unlocked: QuestId[];
  completed: QuestId[];
  xp: number;
  coins: number;
  activeQuest: QuestId;
}

interface BugPosition {
  x: number;
  y: number;
}

const GRID_COLS = 5;
const GRID_ROWS = 3;
const XP_PER_LEVEL = 180;
const GAME_STATE_KEY = 'shabeer-portfolio-quest-state-v1';
const BUG_HIGHSCORE_KEY = 'shabeer-portfolio-bug-high-score-v1';

const QUESTS: QuestDefinition[] = [
  {
    id: 'about',
    title: 'Origin Story',
    tagline: 'Who I am, what I build, and why I care.',
    xpReward: 90,
    coinReward: 45,
    position: { x: 1, y: 0 },
    icon: UserRound,
    gradient: 'from-violet-500 to-fuchsia-500'
  },
  {
    id: 'skills',
    title: 'Skill Tree',
    tagline: 'Core technologies and power-ups.',
    xpReward: 120,
    coinReward: 60,
    position: { x: 3, y: 0 },
    icon: Wrench,
    gradient: 'from-sky-500 to-cyan-500'
  },
  {
    id: 'projects',
    title: 'Project Vault',
    tagline: 'Featured builds and production missions.',
    xpReward: 120,
    coinReward: 70,
    position: { x: 2, y: 1 },
    icon: FolderKanban,
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'experience',
    title: 'Career Timeline',
    tagline: 'Leadership, product delivery, and real impact.',
    xpReward: 150,
    coinReward: 80,
    position: { x: 4, y: 1 },
    icon: Briefcase,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    id: 'contact',
    title: 'Connect Portal',
    tagline: 'Open channels for collaboration.',
    xpReward: 100,
    coinReward: 55,
    position: { x: 3, y: 2 },
    icon: Contact,
    gradient: 'from-amber-500 to-orange-500'
  }
];

const DEFAULT_STATE: PersistedState = {
  player: { x: 0, y: 0 },
  unlocked: ['about'],
  completed: [],
  xp: 0,
  coins: 40,
  activeQuest: 'about'
};

const SKILL_NODES: SkillNode[] = [
  { name: 'Flutter', level: 'Master', percent: 95, tint: 'bg-sky-500' },
  { name: 'React + TypeScript', level: 'Advanced', percent: 88, tint: 'bg-indigo-500' },
  { name: 'IoT + PCB', level: 'Advanced', percent: 84, tint: 'bg-emerald-500' },
  { name: 'Firebase + Appwrite', level: 'Advanced', percent: 82, tint: 'bg-orange-500' },
  { name: 'Node.js APIs', level: 'Advanced', percent: 80, tint: 'bg-lime-500' },
  { name: 'Adobe + Blender', level: 'Advanced', percent: 78, tint: 'bg-fuchsia-500' }
];

const PROJECT_CARDS: ProjectCard[] = [
  {
    name: 'Smart IoT Home Automation',
    summary: 'Mobile-controlled automation with sensors, secure connectivity, and intelligent workflows.',
    stack: ['Flutter', 'Raspberry Pi', 'PCB Design', 'MQTT']
  },
  {
    name: 'Cross-Platform Production App',
    summary: 'High-performance Flutter app with offline-first UX and real-time sync.',
    stack: ['Flutter', 'Firebase', 'REST APIs', 'State Management']
  },
  {
    name: 'Broadcast Engineering Toolkit',
    summary: 'Reliable A/V and live operations tooling for continuous media delivery.',
    stack: ['Audio Systems', 'Network Ops', 'Monitoring', 'Automation']
  }
];

const TIMELINE: TimelineItem[] = [
  { role: 'Managing Director', company: 'PRO26', period: '2025 - Present' },
  { role: 'Director of Development', company: 'VectorCrop', period: '2021 - Present' },
  { role: 'Flutter Developer', company: 'VectorCrop', period: '2021 - Present' },
  { role: 'Technical Assistant', company: 'Peace Radio', period: '2020 - Present' }
];

const CONTACT_ACTIONS: ContactAction[] = [
  { label: 'Call', href: 'tel:+916238261610', icon: Phone },
  { label: 'Email', href: 'mailto:androlite4@gmail.com', icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/916238261610', icon: MessageCircle, external: true },
  { label: 'GitHub', href: 'https://github.com/shabeer-wms', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shabeer-wms', icon: Linkedin, external: true }
];

const isQuestId = (value: unknown): value is QuestId => {
  return typeof value === 'string' && QUESTS.some((quest) => quest.id === value);
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(max, Math.max(min, value));
};

const getRandomBugPosition = (): BugPosition => {
  return {
    x: Math.floor(Math.random() * 79) + 8,
    y: Math.floor(Math.random() * 63) + 12
  };
};

const coordinateKey = (position: Position) => `${position.x}-${position.y}`;

const questByCoordinate = new Map<string, QuestDefinition>(
  QUESTS.map((quest) => [coordinateKey(quest.position), quest] as const)
);

const GamePortfolio = () => {
  const [player, setPlayer] = useState<Position>(DEFAULT_STATE.player);
  const [unlocked, setUnlocked] = useState<QuestId[]>(DEFAULT_STATE.unlocked);
  const [completed, setCompleted] = useState<QuestId[]>(DEFAULT_STATE.completed);
  const [xp, setXp] = useState(DEFAULT_STATE.xp);
  const [coins, setCoins] = useState(DEFAULT_STATE.coins);
  const [activeQuest, setActiveQuest] = useState<QuestId>(DEFAULT_STATE.activeQuest);
  const [toast, setToast] = useState<string>('Welcome to your portfolio quest.');
  const [isHydrated, setIsHydrated] = useState(false);

  const [miniGameRunning, setMiniGameRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [bugScore, setBugScore] = useState(0);
  const [bugHighScore, setBugHighScore] = useState(0);
  const [bugPosition, setBugPosition] = useState<BugPosition>(getRandomBugPosition());

  const activeQuestData = useMemo(() => {
    return QUESTS.find((quest) => quest.id === activeQuest) ?? QUESTS[0];
  }, [activeQuest]);

  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpToNextLevel = xp % XP_PER_LEVEL;
  const progressPercent = Math.round((completed.length / QUESTS.length) * 100);

  const movePlayer = useCallback((dx: number, dy: number) => {
    setPlayer((previous) => ({
      x: clamp(previous.x + dx, 0, GRID_COLS - 1),
      y: clamp(previous.y + dy, 0, GRID_ROWS - 1)
    }));
  }, []);

  const moveTowardTile = (target: Position) => {
    const diffX = target.x - player.x;
    const diffY = target.y - player.y;
    if (diffX === 0 && diffY === 0) {
      return;
    }

    if (Math.abs(diffX) >= Math.abs(diffY)) {
      movePlayer(Math.sign(diffX), 0);
      return;
    }

    movePlayer(0, Math.sign(diffY));
  };

  const completeActiveQuest = () => {
    if (!unlocked.includes(activeQuestData.id)) {
      setToast('Move on the mission map to unlock this quest first.');
      return;
    }

    if (completed.includes(activeQuestData.id)) {
      setToast('Quest already completed. Explore the next node.');
      return;
    }

    setCompleted((previous) => [...previous, activeQuestData.id]);
    setXp((previous) => previous + activeQuestData.xpReward);
    setCoins((previous) => previous + activeQuestData.coinReward);
    setToast(
      `Quest complete: ${activeQuestData.title} (+${activeQuestData.xpReward} XP, +${activeQuestData.coinReward} coins)`
    );
  };

  const resetProgress = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(GAME_STATE_KEY);
    }
    setPlayer(DEFAULT_STATE.player);
    setUnlocked(DEFAULT_STATE.unlocked);
    setCompleted(DEFAULT_STATE.completed);
    setXp(DEFAULT_STATE.xp);
    setCoins(DEFAULT_STATE.coins);
    setActiveQuest(DEFAULT_STATE.activeQuest);
    setToast('Progress reset. New run started.');
  };

  const startBugMiniGame = () => {
    setMiniGameRunning(true);
    setTimeLeft(20);
    setBugScore(0);
    setBugPosition(getRandomBugPosition());
    setToast('Mini-game started. Smash bugs for bonus XP.');
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      setIsHydrated(true);
      return;
    }

    const saved = window.localStorage.getItem(GAME_STATE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Partial<PersistedState>;
        const parsedPlayer = parsed.player;
        const validPlayer =
          parsedPlayer &&
          typeof parsedPlayer.x === 'number' &&
          typeof parsedPlayer.y === 'number'
            ? {
                x: clamp(Math.round(parsedPlayer.x), 0, GRID_COLS - 1),
                y: clamp(Math.round(parsedPlayer.y), 0, GRID_ROWS - 1)
              }
            : DEFAULT_STATE.player;

        const parsedUnlocked = Array.isArray(parsed.unlocked) ? parsed.unlocked.filter(isQuestId) : [];
        const parsedCompleted = Array.isArray(parsed.completed) ? parsed.completed.filter(isQuestId) : [];
        const validActiveQuest = isQuestId(parsed.activeQuest) ? parsed.activeQuest : DEFAULT_STATE.activeQuest;

        setPlayer(validPlayer);
        setUnlocked(parsedUnlocked.length > 0 ? parsedUnlocked : DEFAULT_STATE.unlocked);
        setCompleted(parsedCompleted);
        setXp(typeof parsed.xp === 'number' && Number.isFinite(parsed.xp) ? Math.max(parsed.xp, 0) : 0);
        setCoins(typeof parsed.coins === 'number' && Number.isFinite(parsed.coins) ? Math.max(parsed.coins, 0) : 0);
        setActiveQuest(validActiveQuest);
      } catch (error) {
        console.error('Failed to parse saved quest state:', error);
      }
    }

    const storedHighScore = window.localStorage.getItem(BUG_HIGHSCORE_KEY);
    if (storedHighScore) {
      const parsedHighScore = Number.parseInt(storedHighScore, 10);
      if (Number.isFinite(parsedHighScore) && parsedHighScore >= 0) {
        setBugHighScore(parsedHighScore);
      }
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') {
      return;
    }

    const payload: PersistedState = { player, unlocked, completed, xp, coins, activeQuest };
    try {
      window.localStorage.setItem(GAME_STATE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.error('Failed to persist quest state:', error);
    }
  }, [activeQuest, coins, completed, isHydrated, player, unlocked, xp]);

  useEffect(() => {
    const discoveredQuest = questByCoordinate.get(coordinateKey(player));
    if (!discoveredQuest) {
      return;
    }

    setActiveQuest(discoveredQuest.id);
    setUnlocked((previous) => {
      if (previous.includes(discoveredQuest.id)) {
        return previous;
      }
      setCoins((current) => current + 15);
      setToast(`New quest unlocked: ${discoveredQuest.title} (+15 coins)`);
      return [...previous, discoveredQuest.id];
    });
  }, [player]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const movementKeys = ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'];
      if (!movementKeys.includes(key)) {
        return;
      }

      event.preventDefault();
      if (key === 'arrowup' || key === 'w') {
        movePlayer(0, -1);
      }
      if (key === 'arrowdown' || key === 's') {
        movePlayer(0, 1);
      }
      if (key === 'arrowleft' || key === 'a') {
        movePlayer(-1, 0);
      }
      if (key === 'arrowright' || key === 'd') {
        movePlayer(1, 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer]);

  useEffect(() => {
    if (!miniGameRunning) {
      return;
    }

    const movementTimer = window.setInterval(() => {
      setBugPosition(getRandomBugPosition());
    }, 650);

    return () => window.clearInterval(movementTimer);
  }, [miniGameRunning]);

  useEffect(() => {
    if (!miniGameRunning) {
      return;
    }

    if (timeLeft <= 0) {
      setMiniGameRunning(false);
      const earnedXp = Math.min(60, bugScore * 3);
      const earnedCoins = bugScore * 2;
      if (earnedXp > 0) {
        setXp((current) => current + earnedXp);
        setCoins((current) => current + earnedCoins);
        setToast(`Mini-game complete: +${earnedXp} XP, +${earnedCoins} coins`);
      } else {
        setToast('Mini-game complete. Try for a higher score.');
      }

      setBugHighScore((previous) => {
        const nextHighScore = Math.max(previous, bugScore);
        if (nextHighScore !== previous && typeof window !== 'undefined') {
          window.localStorage.setItem(BUG_HIGHSCORE_KEY, String(nextHighScore));
        }
        return nextHighScore;
      });
      return;
    }

    const countdownTimer = window.setTimeout(() => {
      setTimeLeft((current) => current - 1);
    }, 1000);

    return () => window.clearTimeout(countdownTimer);
  }, [bugScore, miniGameRunning, timeLeft]);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const toastTimer = window.setTimeout(() => {
      setToast('');
    }, 2600);

    return () => window.clearTimeout(toastTimer);
  }, [toast]);

  const renderQuestContent = (questId: QuestId) => {
    if (questId === 'about') {
      return (
        <div className="space-y-5">
          <p className="text-slate-700 leading-relaxed">
            I am Muhammed Shabeer OP, a full stack Flutter developer and IoT-focused builder who enjoys turning ideas
            into polished products. I lead teams, ship production systems, and blend engineering with creative design.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/80 p-4 border border-indigo-100">
              <p className="text-xs uppercase tracking-wide text-slate-500">Experience</p>
              <p className="text-xl font-bold text-slate-900 mt-1">5+ Years</p>
            </div>
            <div className="rounded-xl bg-white/80 p-4 border border-indigo-100">
              <p className="text-xs uppercase tracking-wide text-slate-500">Projects</p>
              <p className="text-xl font-bold text-slate-900 mt-1">50+ Delivered</p>
            </div>
          </div>
        </div>
      );
    }

    if (questId === 'skills') {
      return (
        <div className="space-y-4">
          {SKILL_NODES.map((node) => (
            <div key={node.name} className="rounded-xl border border-slate-200 bg-white/85 p-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-semibold text-slate-900">{node.name}</span>
                <span className="text-slate-500">{node.level}</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full ${node.tint}`} style={{ width: `${node.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (questId === 'projects') {
      return (
        <div className="space-y-4">
          {PROJECT_CARDS.map((project) => (
            <article key={project.name} className="rounded-xl border border-slate-200 bg-white/85 p-4">
              <h4 className="font-bold text-slate-900">{project.name}</h4>
              <p className="text-sm text-slate-600 mt-1">{project.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span key={technology} className="px-2.5 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700">
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      );
    }

    if (questId === 'experience') {
      return (
        <div className="space-y-3">
          {TIMELINE.map((item) => (
            <div key={`${item.role}-${item.company}`} className="rounded-xl border border-slate-200 bg-white/85 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-slate-900">{item.role}</h4>
                  <p className="text-sm text-slate-600">{item.company}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <p className="text-slate-700">Open a channel and let’s build something powerful together.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {CONTACT_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="rounded-xl border border-slate-200 bg-white/90 px-4 py-3 hover:-translate-y-0.5 transition-transform flex items-center gap-3"
              >
                <Icon className="w-4 h-4 text-indigo-600" />
                <span className="font-semibold text-slate-800 text-sm">{action.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden px-4 py-6 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        <section className="glass-card scan-lines relative overflow-hidden p-6 md:p-8">
          <div className="absolute -top-16 -right-14 w-44 h-44 rounded-full bg-indigo-200/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-14 w-44 h-44 rounded-full bg-cyan-200/60 blur-3xl" />
          <div className="relative z-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="hud-chip bg-indigo-50 text-indigo-700 border-indigo-200">
                <Gamepad2 className="w-4 h-4" />
                Portfolio Quest
              </span>
              <span className="hud-chip bg-amber-50 text-amber-700 border-amber-200">
                <Sparkles className="w-4 h-4" />
                Light Mode Locked
              </span>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 items-start">
              <div>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
                  Play through my career like an adventure game.
                </h1>
                <p className="mt-4 text-slate-600 max-w-2xl">
                  Explore the mission map, unlock portfolio quests, complete challenges, and collect rewards. This is a
                  modern interactive profile for Muhammed Shabeer OP.
                </p>
              </div>

              <div className="rounded-2xl border border-indigo-100 bg-white/90 p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo/my_profile_logo.png"
                    alt="Shabeer OP"
                    className="w-14 h-14 rounded-2xl object-cover border border-indigo-100"
                  />
                  <div>
                    <p className="text-sm text-slate-500">Player</p>
                    <h2 className="font-bold text-slate-900">Muhammed Shabeer OP</h2>
                    <p className="text-sm text-indigo-700">Full Stack Flutter Developer</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href="/profile.pdf" download className="fancy-btn">
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="hud-box">
                <p className="hud-label">Level</p>
                <p className="hud-value">{level}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">XP</p>
                <p className="hud-value">{xp}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">Coins</p>
                <p className="hud-value">{coins}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">Quest Progress</p>
                <p className="hud-value">{progressPercent}%</p>
              </div>
            </div>

            <div className="h-2.5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500"
                style={{ width: `${Math.round((xpToNextLevel / XP_PER_LEVEL) * 100)}%` }}
              />
            </div>
          </div>
        </section>

        {toast ? (
          <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-700 flex items-center gap-2">
            <Star className="w-4 h-4" />
            {toast}
          </div>
        ) : null}

        <section className="grid xl:grid-cols-[1.05fr_1.35fr] gap-6">
          <article className="glass-card p-5 md:p-6 space-y-5">
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Mission Map</h3>
                <p className="text-sm text-slate-600 mt-1">Use arrow keys or the D-pad to move and unlock quests.</p>
              </div>
              <button type="button" onClick={resetProgress} className="hud-chip bg-slate-50 text-slate-700 border-slate-200">
                <RefreshCcw className="w-4 h-4" />
                Reset Run
              </button>
            </header>

            <div className="game-grid rounded-2xl border border-slate-200 p-3">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: GRID_COLS * GRID_ROWS }, (_, index) => {
                  const tile = { x: index % GRID_COLS, y: Math.floor(index / GRID_COLS) };
                  const tileQuest = questByCoordinate.get(coordinateKey(tile));
                  const isUnlocked = tileQuest ? unlocked.includes(tileQuest.id) : false;
                  const isCompleted = tileQuest ? completed.includes(tileQuest.id) : false;
                  const isPlayer = tile.x === player.x && tile.y === player.y;
                  const QuestIcon = tileQuest?.icon;

                  return (
                    <button
                      type="button"
                      key={`${tile.x}-${tile.y}`}
                      onClick={() => moveTowardTile(tile)}
                      className="quest-tile"
                      data-locked={tileQuest && !isUnlocked ? 'true' : 'false'}
                    >
                      {tileQuest ? (
                        <div
                          className={`mx-auto mb-1.5 w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${tileQuest.gradient} text-white`}
                        >
                          {QuestIcon ? <QuestIcon className="w-4 h-4" /> : null}
                        </div>
                      ) : (
                        <div className="mx-auto mb-1.5 w-8 h-8 rounded-lg bg-slate-200/70" />
                      )}

                      {tileQuest ? (
                        <p className="text-[10px] font-semibold text-slate-700 leading-tight">{tileQuest.title}</p>
                      ) : (
                        <p className="text-[10px] font-medium text-slate-400">Path</p>
                      )}

                      {isCompleted ? (
                        <div className="absolute top-1 right-1 text-emerald-500">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                      ) : null}

                      {isPlayer ? (
                        <div className="player-token">
                          <Swords className="w-3 h-3 text-white" />
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 justify-items-center">
              <div />
              <button type="button" className="dpad-btn" onClick={() => movePlayer(0, -1)} aria-label="Move up">
                ↑
              </button>
              <div />
              <button type="button" className="dpad-btn" onClick={() => movePlayer(-1, 0)} aria-label="Move left">
                ←
              </button>
              <button type="button" className="dpad-btn" onClick={() => movePlayer(0, 1)} aria-label="Move down">
                ↓
              </button>
              <button type="button" className="dpad-btn" onClick={() => movePlayer(1, 0)} aria-label="Move right">
                →
              </button>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 space-y-3">
              <div className="flex items-center gap-2 text-slate-700">
                <Move className="w-4 h-4" />
                <p className="text-sm font-semibold">Quest Status</p>
              </div>
              <div className="space-y-2">
                {QUESTS.map((quest) => {
                  const QuestIcon = quest.icon;
                  const isUnlocked = unlocked.includes(quest.id);
                  const isDone = completed.includes(quest.id);
                  return (
                    <button
                      type="button"
                      key={quest.id}
                      onClick={() => setActiveQuest(quest.id)}
                      className={`w-full rounded-xl border px-3 py-2 text-left transition ${
                        activeQuest === quest.id
                          ? 'border-indigo-300 bg-indigo-50'
                          : 'border-slate-200 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <QuestIcon className="w-4 h-4 text-slate-700" />
                          <span className="text-sm font-semibold text-slate-800">{quest.title}</span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full ${
                            isDone
                              ? 'bg-emerald-100 text-emerald-700'
                              : isUnlocked
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'bg-slate-200 text-slate-500'
                          }`}
                        >
                          {isDone ? 'Done' : isUnlocked ? 'Unlocked' : 'Locked'}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </article>

          <article className="glass-card p-5 md:p-6 space-y-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Active Quest</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{activeQuestData.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{activeQuestData.tagline}</p>
              </div>
              <div className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-white bg-gradient-to-r ${activeQuestData.gradient}`}>
                <Coins className="w-4 h-4" />
                +{activeQuestData.coinReward}
                <Zap className="w-4 h-4 ml-1" />
                +{activeQuestData.xpReward} XP
              </div>
            </div>

            {!unlocked.includes(activeQuestData.id) ? (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-sm font-semibold text-amber-800">Quest locked.</p>
                <p className="text-sm text-amber-700 mt-2">
                  Move on the map to tile ({activeQuestData.position.x + 1}, {activeQuestData.position.y + 1}) to
                  unlock this mission.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-indigo-50/30 p-4 md:p-5">
                {renderQuestContent(activeQuestData.id)}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={completeActiveQuest}
                disabled={!unlocked.includes(activeQuestData.id) || completed.includes(activeQuestData.id)}
                className="fancy-btn disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="w-4 h-4" />
                {completed.includes(activeQuestData.id) ? 'Completed' : 'Complete Quest'}
              </button>
              <a
                href="/profile.pdf"
                download
                className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                View Resume
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">Mission Journal</h4>
                <span className="text-xs text-slate-500">{completed.length} quests completed</span>
              </div>
              <div className="space-y-2">
                {completed.length > 0 ? (
                  completed.map((questId) => {
                    const quest = QUESTS.find((item) => item.id === questId);
                    if (!quest) {
                      return null;
                    }
                    return (
                      <div key={quest.id} className="flex items-center justify-between rounded-lg bg-emerald-50 border border-emerald-100 px-3 py-2">
                        <span className="text-sm font-medium text-emerald-800">{quest.title}</span>
                        <span className="text-xs text-emerald-700">+{quest.xpReward} XP</span>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-sm text-slate-500">No completed quests yet. Start with Origin Story.</p>
                )}
              </div>
            </div>
          </article>
        </section>

        <section className="grid xl:grid-cols-[1.25fr_0.75fr] gap-6">
          <article className="glass-card p-5 md:p-6">
            <header className="flex flex-wrap justify-between items-center gap-3 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Mini-Game: Bug Blitz</h3>
                <p className="text-sm text-slate-600">Hit the moving bug for bonus XP and coins.</p>
              </div>
              <button type="button" onClick={startBugMiniGame} className="fancy-btn">
                <Crosshair className="w-4 h-4" />
                {miniGameRunning ? 'Restart' : 'Start'}
              </button>
            </header>

            <div className="relative h-64 sm:h-72 rounded-2xl border border-slate-200 overflow-hidden bg-gradient-to-br from-slate-50 to-cyan-50">
              <div className="absolute inset-0 game-grid opacity-60" />
              {!miniGameRunning ? (
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <p className="text-slate-600">
                    Start the round and click the bug as fast as you can.
                    <span className="block text-sm text-slate-500 mt-2">Timer: 20s</span>
                  </p>
                </div>
              ) : null}

              {miniGameRunning ? (
                <button
                  type="button"
                  onClick={() => {
                    setBugScore((current) => current + 1);
                    setBugPosition(getRandomBugPosition());
                  }}
                  className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-xl grid place-items-center hover:scale-110 transition"
                  style={{ left: `${bugPosition.x}%`, top: `${bugPosition.y}%`, transform: 'translate(-50%, -50%)' }}
                  aria-label="Hit bug"
                >
                  <Crosshair className="w-5 h-5" />
                </button>
              ) : null}
            </div>
          </article>

          <article className="glass-card p-5 md:p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Combat Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="hud-box">
                <p className="hud-label">Time Left</p>
                <p className="hud-value">{miniGameRunning ? `${timeLeft}s` : 'Ready'}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">Score</p>
                <p className="hud-value">{bugScore}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">High Score</p>
                <p className="hud-value">{bugHighScore}</p>
              </div>
              <div className="hud-box">
                <p className="hud-label">Bonus</p>
                <p className="hud-value">{miniGameRunning ? `${bugScore * 3} XP` : '-'}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 space-y-3">
              <h4 className="font-semibold text-slate-900">Fast Travel</h4>
              <div className="space-y-2">
                <a
                  href="https://github.com/shabeer-wms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shabeer-wms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-link"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="mailto:androlite4@gmail.com" className="quick-link">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
              <div className="flex items-center gap-2 text-indigo-700 font-semibold">
                <MapPinned className="w-4 h-4" />
                Kottakkal, Kerala, India
              </div>
              <p className="text-sm text-indigo-700/90 mt-2">Available for remote and on-site projects.</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default GamePortfolio;
