import React from 'react';
import { type Mob, getItemImage } from '../data/lootData';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface MobCardProps {
    mob: Mob;
}

export const MobCard: React.FC<MobCardProps> = ({ mob }) => {
    return (
        <Card className="ornate-corners-card animate-fade-in-item">
            {/* Mob Info (Left Side) */}
            <div className="flex w-[40%] flex-col items-center justify-center gap-3 bg-black/20 p-4">
                <div className="flex h-[100px] w-full items-center justify-center overflow-hidden">
                    <img
                        src={mob.image}
                        alt={mob.name}
                        loading="lazy"
                        className="h-full w-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    />
                </div>
                <div className="text-center font-cinzel text-[1.1rem] font-bold leading-tight text-text-heading">
                    {mob.name}
                </div>
            </div>

            {/* Divider */}
            <div className="my-2 w-px bg-linear-to-b from-transparent via-border-ornate to-transparent" />

            {/* Drops Section (Right Side) */}
            <div className="flex flex-1 flex-col justify-start gap-2 px-4 py-3">
                {mob.eggProbability !== undefined && (
                    <div className="mb-1 flex animate-fade-in items-center justify-between rounded-[4px] border border-border-ornate bg-black/40 px-3 py-[0.4rem] shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.05em] text-text-secondary">
                            {mob.eggType}
                        </span>
                        <span className="font-cinzel text-[1.2rem] font-extrabold text-accent-gold [text-shadow:0_0_10px_rgba(242,162,65,0.4)]">
                            {mob.eggProbability.toFixed(1)}%
                        </span>
                    </div>
                )}

                <ul className="flex list-none flex-col gap-[0.4rem]">
                    {mob.drops.length > 0 ? (
                        mob.drops.map((drop, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-between rounded-[4px] border-b border-white/[0.03] p-2 transition-colors duration-200 last:border-b-0 hover:bg-[rgba(242,162,65,0.04)]"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={getItemImage(drop.name)}
                                        alt={drop.name}
                                        className="size-6 object-contain [image-rendering:pixelated]"
                                        loading="lazy"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                    <span className="text-[0.95rem] font-medium text-text-primary">
                                        {drop.name}
                                    </span>
                                </div>
                                {drop.quantity === 'low' && <Badge variant="rare">Rare</Badge>}
                                {drop.quantity === 'high' && <Badge variant="common">Common</Badge>}
                            </li>
                        ))
                    ) : (
                        <li className="py-2 text-[0.85rem] italic text-text-secondary">
                            No specific drops from this cage type
                        </li>
                    )}
                </ul>
            </div>
        </Card>
    );
};
