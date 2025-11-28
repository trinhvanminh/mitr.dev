export function MinhTrinhMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 512 261"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 260.655V0H74.4727V37.2364H111.709V74.4727H148.945V37.2364H186.182V0H260.655V260.655H186.182V112.873H148.945V185.018H111.709V112.873H74.4727V260.655H0Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M288.582 0V37.2364H363.055V260.655H437.527V37.2364H512V0H288.582Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <path
        d="M34.9091 260.655V0H89.4337V37.2364H116.696V74.4727H143.958V37.2364H171.221V0H225.745V260.655H171.221V112.873H143.958V185.018H116.696V112.873H89.4337V260.655H34.9091Z"
        fill="currentColor"
      />
      <path
        d="M321.164 0V37.2364H374.691V260.655H428.218V37.2364H481.745V0H321.164Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg width="512" height="261" viewBox="0 0 512 261" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 260.655V0h74.473v37.236h37.236v37.237h37.236V37.236h37.237V0h74.473v260.655h-74.473V112.873h-37.237v72.145h-37.236v-72.145H74.473v147.782zM288.582 0v37.236h74.473v223.419h74.472V37.236H512V0z" fill="${color}" fill-opacity=".3"/><path d="M34.91 260.655V0h54.524v37.236h27.262v37.237h27.262V37.236h27.263V0h54.524v260.655h-54.524V112.873h-27.263v72.145h-27.262v-72.145H89.434v147.782zM321.164 0v37.236h53.527v223.419h53.527V37.236h53.527V0z" fill="${color}"/></svg>`;
}
