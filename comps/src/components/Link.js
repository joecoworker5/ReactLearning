import classnames from 'classnames';
import useNavigation from "../hooks/use-navigation";

function Link({activeClassName, className, to, children }){
    const { navigate, currentPath} = useNavigation();

    const classes = classnames( 'text-blue-500',className, currentPath === to && activeClassName);
    const handleClick = (event) => {
        console.log(event);
        if (event.metaKey || event.ctrlKey){
            return;  // 當使用者有按 command/ctrlKey 希望執行瀏覽器預設行為
        }
        event.preventDefault();
        navigate(to);
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;