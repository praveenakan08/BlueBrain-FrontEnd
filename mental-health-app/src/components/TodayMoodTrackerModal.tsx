interface TodayMoodTrackModalType {
    open: any,
    onClose: any,
    children: any;
}

const TodayMoodTrackerModal = ({open, onClose, children}: TodayMoodTrackModalType): JSX.Element => {
    return (    
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
            <div 
                onClick={(e) => e.stopPropagation()} 
                className={`bg-white rounded-xl shadow p-6 transition-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    Content
            </div>

            <button onClick={onClose} className="btn absolute top-2 right-2 p-1 rounded-lg
                    text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                    Close            
            </button>

            {children}
        </div>);
}

export default TodayMoodTrackerModal;
