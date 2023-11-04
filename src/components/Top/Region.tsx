import "./Top.scss";

interface RegionProps {
  region: string | null;
  changeRegion: (region: string) => void;
  darkMode: boolean;
}

function Region(props: RegionProps) {
  return <div className={[props.darkMode?"Region":"dark-Region"]}></div>;
}

export default Region;
