const hobbies = [
    {
        title: "Cooking",
        emoji: "🍳"
    },
    {
        title: "Gaming",
        emoji: "🎮"
    },
    {
        title: "Basketball",
        emoji: "🏀"
    },
    {
        title: "Fitness",
        emoji: "🏋️‍♂️"
    },
    {
        title: "Board game",
        emoji: "🂡"
    },
    {
        title: "Music",
        emoji: "🎧"
    },
    {
        title: "Guitar",
        emoji: "🎸"
    },
    {
        title: "Reading",
        emoji: "📚"
    },
];

export const Hobbies = () => {
    return (
        <div className="flex flex-row flex-wrap gap-3">
            {hobbies.map(hobby => (
                <div key={hobby.title} className="inline-flex items-center gap-1 rounded-2xl px-4 py-1 bg-gradient-to-r from-stone-700/80 to-muted">
                    <span className="font-medium text-foreground">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                </div>
            ))}
        </div>
    );
}