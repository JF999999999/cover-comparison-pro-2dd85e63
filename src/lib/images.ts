import hero from "@/assets/poolueberdachung-hero-garten.webp.asset.json";
import schienenlos from "@/assets/schienenlose-poolueberdachung.webp.asset.json";
import flach from "@/assets/poolueberdachung-flach-echtglas.webp.asset.json";
import mittelhoch from "@/assets/poolueberdachung-mittelhoch-geoeffnet.webp.asset.json";
import hoch from "@/assets/poolueberdachung-hoch-solarmotor.webp.asset.json";
import begehbar from "@/assets/poolueberdachung-begehbar-dachterrasse.webp.asset.json";
import detail from "@/assets/poolueberdachung-detail-profil.webp.asset.json";
import fertigung from "@/assets/poolueberdachung-deutschland-fertigung.webp.asset.json";
import werk from "@/assets/poolueberdachung-produktion-werk.webp.asset.json";
import abend from "@/assets/poolueberdachung-abendstimmung.webp.asset.json";
import kundenprojekt from "@/assets/poolueberdachung-kundenprojekt-garten.webp.asset.json";
import pflege from "@/assets/poolueberdachung-pflege-schiebeelemente.webp.asset.json";

import { SITE_URL } from "./site";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
};

export const IMAGES = {
  hero: {
    src: hero.url,
    width: 1600,
    height: 1065,
    alt: "Niedrige Poolüberdachung aus Glas über einem Gartenpool im Sonnenlicht",
    title: "Poolüberdachung im Garten",
  },
  schienenlos: {
    src: schienenlos.url,
    width: 480,
    height: 360,
    alt: "Superflache schienenlose Poolüberdachung ohne Bodenschienen am Poolrand",
    title: "Schienenlose Poolüberdachung ohne Bodenschienen",
  },
  flach: {
    src: flach.url,
    width: 480,
    height: 271,
    alt: "Flache Poolüberdachung mit Echtglas, begeh- und unterschwimmbar",
    title: "Flache Poolüberdachung mit Echtglas",
  },
  mittelhoch: {
    src: mittelhoch.url,
    width: 1400,
    height: 1051,
    alt: "Mittelhohe Poolüberdachung im geöffneten Zustand mit freiem Zugang zum Pool",
    title: "Mittelhohe Poolüberdachung, geöffnet",
  },
  hoch: {
    src: hoch.url,
    width: 442,
    height: 787,
    alt: "Hohe Poolüberdachung ohne Bodenschienen mit solarbetriebenem Antrieb",
    title: "Hohe Poolüberdachung mit solarbetriebenem Antrieb",
  },
  begehbar: {
    src: begehbar.url,
    width: 1400,
    height: 931,
    alt: "Begehbare Poolüberdachung mit belastbarer Dachfläche als zusätzliche Terrasse",
    title: "Begehbare Poolüberdachung mit nutzbarer Dachfläche",
  },
  detail: {
    src: detail.url,
    width: 480,
    height: 360,
    alt: "Detailaufnahme eines schmalen Aluminiumprofils einer Poolüberdachung",
    title: "Detail: Aluminiumprofil einer Poolüberdachung",
  },
  fertigung: {
    src: fertigung.url,
    width: 1600,
    height: 1065,
    alt: "Fertigung einer Poolüberdachung in einem deutschen Produktionsbetrieb",
    title: "Poolüberdachung aus deutscher Fertigung",
  },
  werk: {
    src: werk.url,
    width: 1181,
    height: 655,
    alt: "Außenaufnahme des Produktionsstandorts für Poolüberdachungen in Deutschland",
    title: "Produktionsstandort für Poolüberdachungen",
  },
  abend: {
    src: abend.url,
    width: 1400,
    height: 932,
    alt: "Poolüberdachung in Abendstimmung mit beleuchtetem Pool im Garten",
    title: "Poolüberdachung in Abendstimmung",
  },
  kundenprojekt: {
    src: kundenprojekt.url,
    width: 1400,
    height: 934,
    alt: "Kundenprojekt: Poolüberdachung in einem großzügig angelegten Garten",
    title: "Kundenprojekt mit Poolüberdachung",
  },
  pflege: {
    src: pflege.url,
    width: 1400,
    height: 933,
    alt: "Schiebeelemente einer Poolüberdachung, teilweise geöffnet für Reinigung und Pflege",
    title: "Schiebeelemente einer Poolüberdachung",
  },
} satisfies Record<string, SiteImage>;

export const absoluteImageUrl = (image: SiteImage) => `${SITE_URL}${image.src}`;
