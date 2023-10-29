import "./Top.scss";

interface RegionProps {
  region: string | null;
  changeRegion: (region: string) => void;
  darkMode: boolean;
}

function Region(props: RegionProps) {
  return <div className="Region"></div>;
}

export default Region;
