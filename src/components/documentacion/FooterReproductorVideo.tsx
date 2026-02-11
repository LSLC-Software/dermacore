interface Lesson {
    id: number;
    title: string;
    videoId: string;
}

interface FooterProps {
    activeLesson: Lesson;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function FooterReproductorVideo({ activeLesson, activeTab, setActiveTab }: FooterProps) {
    return (
        <div className="p-6 max-w-5xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{activeLesson.title}</h1>

            {/* PESTAÑAS */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex gap-6">
                    {['overview', 'resources', 'notes'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                                activeTab === tab 
                                ? 'border-cyan-500 text-[var(--primary)]' 
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                        >
                            {tab === 'overview' && 'Descripción General'}
                            {tab === 'notes' && 'Mis Notas'}
                        </button>
                    ))}
                </nav>
            </div>

            {/* CONTENIDO DE LAS PESTAÑAS */}
            <div className="animate-fade-in">
                {activeTab === 'overview' && (
                    <div className="prose text-gray-600">
                        <p>Descripción dinámica para: {activeLesson.title}</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Navegación por la interfaz.</li>
                            <li>Conceptos de seguridad.</li>
                        </ul>
                    </div>
                )}
                
                {activeTab === 'notes' && (
                    <textarea 
                        className="w-full p-3 border rounded-lg bg-yellow-50 text-gray-700 min-h-[150px] focus:outline-blue-500"
                        placeholder={`Escribe tus notas sobre ${activeLesson.title}...`}
                    ></textarea>
                )}
            </div>
        </div>
    );
}