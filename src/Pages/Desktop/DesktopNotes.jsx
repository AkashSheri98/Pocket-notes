import styles from "../../Pages/Desktop/DesktopNotes.module.css";
import DesktopHome from "../../components/HomeDesktop/DesktopHome";
import SidebarDesktop from "../../components/DesktopSidebar/sidebarDesktop";


const DesktopNotes =()=>{
    return(
        <> 
          <div className={styles.desktop}>
           <SidebarDesktop/>
            <DesktopHome/>
          </div>
        </>
    );
};

export default DesktopNotes;