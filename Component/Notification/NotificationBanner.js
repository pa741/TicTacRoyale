import styles from '../../styles/game.module.css'

function NotificationBanner({ message, type, children }) {
  console.log(children)

  let flag = false;
  children && children.map((child) => {
    if (child) {
      flag = true;
    }
  })



  return (
    <>
      {flag &&
        <div className={`${styles.NotificationBanner} ${type}`}>
          {children}
        </div>}
    </>
  );
}

export default NotificationBanner;