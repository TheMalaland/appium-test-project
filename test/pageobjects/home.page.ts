class HomePage {
    /**
     * Selector para el botón de inicio.
     */
    get homeButton() {
        return $('android=new UiSelector().description("Home")'); // Cambia el selector si es necesario
    }

    /**
     * Presiona el botón de inicio.
     */
    async pressHomeButton(): Promise<void> {
        console.log('Presionando el botón de inicio...');
        await driver.pressKeyCode(3); // Código 3 corresponde al botón de inicio (HOME)
        console.log('Botón de inicio presionado.');
    }

    /**
     * Verifica si el botón de inicio está visible.
     * @returns {Promise<boolean>} `true` si el botón está visible, de lo contrario `false`.
     */
    async isHomeButtonVisible(): Promise<boolean> {
        return await this.homeButton.isDisplayed();
    }
}

export default new HomePage();