export default function createBackground(path) {
    return {
        position: 'fixed',        
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.5,
        backgroundImage: "url('" + path + "')",
        backgroundSize: 'cover',
    };
}