import React from 'react'


export default class CourseCard
    extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.title}
                    </h5>
                    <p className="card-text">Card text.</p>
                    <a href="#"
                       className="btn btn-primary" onClick={()=> this.selectCourse(this.props.course)}
                        to={`/course/edit/${this.props.course.id}`}>s
                        More...
                    </a>
                </div>
            </div>
        )
    }

}