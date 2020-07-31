import React from 'react'
import './About.css'

class About extends React.Component {
    render() {
        return (
            <div className = "About">
                <div>
                    <h1>Немного о приложении</h1>
                    <p>Проект выполнен на <strong>React</strong> и является мини-платформой для создания и решения тестов. Настроена авторизация -  для доступа к инструменту генерирования тестов.</p>
                    <ul>
                        <li>Для управления state - <strong><a href = "https://redux.js.org/basics/usage-with-react">redux</a></strong></li>
                        <li>Маршрутизация - <strong><a href = 'https://github.com/ReactTraining/react-router'>react router</a></strong></li>
                        <li>Валидация данных - <strong><a href = "https://github.com/arasatasaygin/is.js">is.js</a></strong></li>
                        <li>Шрифты и иконки - <strong><a href = "https://www.bootstrapcdn.com/fontawesome/">font-awesome</a></strong></li>
                        <li>Проект собран с помощью - <strong><a href = "https://webpack.js.org/">webpack</a></strong></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About