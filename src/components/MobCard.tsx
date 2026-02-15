import React from 'react';
import { type Mob, getItemImage } from '../data/lootData';

interface MobCardProps {
    mob: Mob;
}

export const MobCard: React.FC<MobCardProps> = ({ mob }) => {
    return (
        <div className="mob-card animate-item">
            <div className="mob-info">
                <div className="mob-image">
                    <img
                        src={mob.image}
                        alt={`${mob.name}`}
                        loading="lazy"
                    />
                </div>
                <div className="mob-name">{mob.name}</div>
            </div>

            <div className="mob-divider"></div>

            <div className="mob-drops-section">
                {mob.eggProbability !== undefined && (
                    <div className="egg-probability-badge">
                        <span className="egg-type">{mob.eggType}</span>
                        <span className="egg-percent">{mob.eggProbability.toFixed(1)}%</span>
                    </div>
                )}

                <ul className="drop-list">
                    {mob.drops.length > 0 ? (
                        mob.drops.map((drop, index) => (
                            <li key={index} className="drop-item">
                                <div className="drop-content">
                                    <img
                                        src={getItemImage(drop.name)}
                                        alt={drop.name}
                                        className="item-icon"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <span className="drop-name">{drop.name}</span>
                                </div>
                                {drop.quantity === 'low' && <span className="badge badge-low">Rare</span>}
                                {drop.quantity === 'high' && <span className="badge badge-high">Common</span>}
                            </li>
                        ))
                    ) : (
                        <li className="no-drops">No specific drops from this cage type</li>
                    )}
                </ul>
            </div>
        </div>
    );
};
