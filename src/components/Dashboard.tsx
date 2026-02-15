import React, { useState, useMemo } from 'react';
import { mobs } from '../data/lootData';
import { MobCard } from './MobCard';

const SkullIcon = () => (
    <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
        <path d="M8 20v2h8v-2" /><path d="m12.5 17-.5-1-.5 1h1z" />
        <path d="M17 14V8a5 5 0 0 0-10 0v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3z" />
    </svg>
);

const LeafIcon = () => (
    <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 .5 20 .5s-1 5-4 9c-2 2.5-4 4-8 4" />
        <path d="M5 21c.5-4.5 2.5-8 7-10" />
    </svg>
);

const SwordIcon = () => (
    <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
        <line x1="13" y1="19" x2="19" y2="13" />
        <line x1="16" y1="16" x2="20" y2="20" />
        <line x1="19" y1="21" x2="21" y2="19" />
    </svg>
);

const SearchIcon = () => (
    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const DiamondIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="12" y="1" width="15.56" height="15.56" rx="2" transform="rotate(45 12 1)" />
    </svg>
);

const SortIcon = ({ order }: { order: 'asc' | 'desc' | 'none' }) => {
    if (order === 'none') return (
        <svg className="control-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 9-3-3-3 3" /><path d="m9 15 3 3 3-3" />
        </svg>
    );
    if (order === 'desc') return (
        <svg className="control-icon active" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 10 5 5 5-5" /><path d="M12 15V3" />
        </svg>
    );
    return (
        <svg className="control-icon active" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m17 14-5-5-5 5" /><path d="M12 9v12" />
        </svg>
    );
};

const tabConfig = [
    { key: 'Mob Cage' as const, icon: <SkullIcon />, label: 'Mob Cage' },
    { key: 'Terrarium' as const, icon: <LeafIcon />, label: 'Terrarium' },
    { key: 'Binding Plate' as const, icon: <SwordIcon />, label: 'Binding Plate' },
];

export const Dashboard: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState<'Mob Cage' | 'Terrarium' | 'Binding Plate'>('Mob Cage');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

    const handleSortToggle = () => {
        setSortOrder(prev => {
            if (prev === 'none') return 'desc';
            if (prev === 'desc') return 'asc';
            return 'none';
        });
    };

    const filteredMobs = useMemo(() => {
        let result = mobs.filter(mob => {
            const matchesTab = mob.category === activeTab;
            const matchesSearch =
                mob.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                mob.drops.some(drop => drop.name.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesTab && matchesSearch;
        });

        if (sortOrder !== 'none') {
            result = [...result].sort((a, b) => {
                const probA = a.eggProbability ?? -1;
                const probB = b.eggProbability ?? -1;

                if (sortOrder === 'desc') {
                    return probB - probA;
                } else {
                    return probA - probB;
                }
            });
        }

        return result;
    }, [searchTerm, activeTab, sortOrder]);

    return (
        <div className="container">
            <header>
                <h1>Cagerium</h1>
                <p className="subtitle">Vault Hunters 3.20.3.0 — Loot Database</p>
                <div className="ornate-divider">
                    <DiamondIcon />
                </div>
            </header>

            <div className="controls">
                <div className="search-wrapper">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search by mob name or drop..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search mobs and drops"
                    />
                </div>

                <div className="sort-wrapper">
                    <button
                        className={`sort-button ${sortOrder !== 'none' ? 'active' : ''}`}
                        onClick={handleSortToggle}
                        title={`Sort by Egg Percentage: ${sortOrder === 'none' ? 'Default' : sortOrder === 'desc' ? 'Highest to Lowest' : 'Lowest to Highest'}`}
                    >
                        <SortIcon order={sortOrder} />
                        <span>Egg %</span>
                    </button>
                </div>

                <div className="tabs">
                    {tabConfig.map(({ key, icon, label }) => (
                        <button
                            key={key}
                            className={`tab ${activeTab === key ? 'active' : ''}`}
                            onClick={() => setActiveTab(key)}
                            aria-pressed={activeTab === key}
                        >
                            {icon}
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <p className="results-count">
                Showing <strong>{filteredMobs.length}</strong> {filteredMobs.length === 1 ? 'mob' : 'mobs'}
                {searchTerm && <> matching "<strong>{searchTerm}</strong>"</>}
            </p>

            <div className="mob-grid">
                {filteredMobs.map(mob => (
                    <MobCard key={mob.id} mob={mob} />
                ))}
                {filteredMobs.length === 0 && (
                    <div className="no-results">
                        No results found for "<strong>{searchTerm}</strong>" in {activeTab}.
                    </div>
                )}
            </div>

            <footer>
                Cagerium Drop Visualizer — Data for Vault Hunters v3.20.3.0
            </footer>
        </div>
    );
};
