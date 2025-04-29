class PlayStorePage {
    /**
     * Selector para el ícono de la Play Store.
     */
    get playStoreIcon() {
        return $('android=new UiSelector().description("Play Store")'); // Cambia el selector si es necesario
    }

    /**
     * Abre la Play Store haciendo clic en su ícono.
     */
    async openPlayStore(): Promise<void> {
        console.log('Esperando a que el ícono de Play Store esté visible...');
        await this.playStoreIcon.waitForDisplayed({ timeout: 5000 });
        console.log('Ícono de Play Store encontrado. Haciendo clic...');
        await this.playStoreIcon.click();
        console.log('Play Store abierta.');
    }

    /**
     * Verifica si el ícono de la Play Store está visible.
     * @returns {Promise<boolean>} `true` si el ícono está visible, de lo contrario `false`.
     */
    async isPlayStoreIconVisible(): Promise<boolean> {
        return await this.playStoreIcon.isDisplayed();
    }
}

export default new PlayStorePage();