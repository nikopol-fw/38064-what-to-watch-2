import * as React from 'react';


interface Props {
  percentage: number;
  timingString: string;
}

export const PlayerProgress: React.FC<Props> = (props) => {
  const {percentage, timingString} = props;

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={percentage} max="100"/>
        <div className="player__toggler" style={{left: `${percentage}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{timingString}</div>
    </div>
  );
};
