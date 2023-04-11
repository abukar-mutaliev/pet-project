import React from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const [t] = useTranslation();

    return (
        <div>
            <h1>
                {t('Моя страница')}
            </h1>
        </div>
    );
}

export default MainPage;
