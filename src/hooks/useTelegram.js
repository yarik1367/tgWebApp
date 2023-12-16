const tg = window.Telegram.WebApp;

export function useTelegram() {
    
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        
    }

    return{
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}