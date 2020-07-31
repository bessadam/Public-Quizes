import React from 'react';
import './quiz.css'
import '../../components/ActiveQuiz/ActiveQuiz'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import Loader from '../../components/UI/Loader/Loader'
import {connect} from 'react-redux'
import {fetchQuizById} from '../../store/actions/quiz'
import {quizAnswerClick} from '../../store/actions/quiz'
import {retryQuiz} from '../../store/actions/quiz'  

class Quiz extends React.Component {

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    componentDidMount() {
        this.props.fetchQuizById(this.props.match.params.id)
    }

    render() {
        return (
            <div className = {'Quiz'}>
                <div className = {'QuizWrapper'}>
                    <h1>Тест на знания основ js + react</h1>

                    {
                        this.props.loading || !this.props.quiz 
                            ? <Loader/>
                            : this.props.isFinished 
                                ? <FinishedQuiz
                                    results = {this.props.results}
                                    quiz = {this.props.quiz}
                                    onRetry = {this.props.retryQuiz}
                                
                                />
                                : <ActiveQuiz
                                    answers = {this.props.quiz[this.props.activeQuestion].answers}
                                    question = {this.props.quiz[this.props.activeQuestion].question}
                                    onAnswerClick = {this.props.quizAnswerClick}
                                    quizLength  = {this.props.quiz.length}
                                    answerNumber = {this.props.activeQuestion + 1}
                                    state = {this.props.answerState}
                                />
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)