import styles from '../apps/Home/css/ToolTip.module.css'
function ToolTip({summary}) {
    return ( 
        <span classNam={`${styles} tooltip-text invisible w-32 bg-gray-500 text-white text-center py-1 rounded-md absolute z-10 bottom-full left-1/2 ml-[60px] opacity-0 transition-opacity duration-300`}>{summary}</span>
     );
}

export default ToolTip;