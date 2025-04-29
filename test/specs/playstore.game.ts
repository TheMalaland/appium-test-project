import PlayStorePage from '../pageobjects/playstore.page';
import HomePage from '../pageobjects/home.page';
import { expect } from 'chai';

describe('Play Store Test - HomePage(games)', () => {
    before(async () => {
        console.log('Regresando a la pantalla de inicio...');
        await HomePage.pressHomeButton(); // Regresa al home antes de cada prueba
        const isHomeVisible = await HomePage.isHomeButtonVisible();
        expect(isHomeVisible).to.be.true; // Validación: Asegúrate de que estás en la pantalla de inicio
        console.log('Pantalla de inicio lista.');
    });

    it('should open the Play Store', async () => {
        try {
            console.log('Verificando si el ícono de Play Store es visible...');
            const isVisible = await PlayStorePage.isPlayStoreIconVisible();
            expect(isVisible).to.be.true; // Validación: El ícono de Play Store debe ser visible
            console.log('El ícono de Play Store es visible.');

            console.log('Abriendo la Play Store...');
            await PlayStorePage.openPlayStore();

            // Validación adicional: Verifica que la Play Store se haya abierto
            const isPlayStoreOpened = await PlayStorePage.isPlayStoreIconVisible(); // Cambia este método si tienes un indicador de que la Play Store está abierta
            expect(isPlayStoreOpened).to.be.false; // El ícono ya no debería ser visible si la Play Store está abierta
            console.log('La Play Store se abrió correctamente.');
        } catch (error) {
            console.error('Error durante la prueba:', (error as Error).message);
            throw error;
        }
    });

    it('The notifications icon should be visible & clickable', async () => {
        console.log('Esperando a que el ícono de notificaciones esté visible...');
        const notificationsIcon = await $('android=new UiSelector().description("Show notifications and offers.")'); // Cambia "Notifications" si el texto es diferente
        await notificationsIcon.waitForDisplayed({ timeout: 5000 });
        expect(await notificationsIcon.isDisplayed()).to.be.true; // Validación: El ícono de notificaciones debe ser visible
        console.log('Ícono de notificaciones encontrado.');
        console.log('Haciendo clic en el ícono de notificaciones...');
        await notificationsIcon.click();
        console.log('Ícono de notificaciones clickeado.');

    });

    it('verify the notifications page is displayed', async () => {

        console.log('Verificando el texto de la página de notificaciones...');
        const notificationsTextElement = await $('android=new UiSelector().text("You\'re all caught up")');
        await notificationsTextElement.waitForDisplayed({ timeout: 5000 });
        const notificationsText = await notificationsTextElement.getText();
        expect(notificationsText).to.equal("You're all caught up");

        console.log('regresando a la pantalla de inicio...');
        const goBackButton = await $('android=new UiSelector().description("Navigate up")');
        await goBackButton.waitForDisplayed({ timeout: 5000 });
        await goBackButton.click();

    });

    it('the user button should be visible & clickable', async () => {

        console.log('Esperando a que el ícono de usuario esté visible...');
        const userButton = await $('android=new UiSelector().resourceId("com.android.vending:id/0_resource_name_obfuscated").instance(3)'); // Cambia "User" si el texto es diferente
        await userButton.waitForDisplayed({ timeout: 5000 });
        expect(await userButton.isDisplayed()).to.be.true; // Validación: El ícono de usuario debe ser visible
        console.log('Ícono de usuario encontrado.');
        console.log('Haciendo clic en el ícono de usuario...');
        await userButton.click();
        console.log('Ícono de usuario clickeado.');




    });


});