import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
class Form extends Component {
    render() {
        return (
            <div className="wrapper">

                <section className="form-section">
                    <form className="text-center  p-5">
                        <h1>Network Programming - Bonus Task 2</h1>
                        <div className="form-group">
                            <div className="mt-3">
                                <label htmlFor="studentNumber">Your student number:</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your student number" />
                            </div>
                            <div className="mt-5">
                            <label for="exampleFormControlSelect1">Select a group:</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Group 1</option>
                                <option>Group 2</option>
                                <option>Group 3</option>
                                <option>Group 4</option>
                                <option>Group 5</option>
                            </select>


                        </div>
                        </div>
                        <div className="mt-5">
                            <label>Select a score you want to give to their presentation:</label>
                            <br />
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                            </div>
                            <div className="form-check form-check-inline mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">3</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" defaultValue="option4" />
                                <label className="form-check-label" htmlFor="inlineRadio4">4</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="inlineRadio5">5</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="inlineRadio6">6</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio7" defaultValue="option7" />
                                <label className="form-check-label" htmlFor="inlineRadio7">7</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio8" defaultValue="option8" />
                                <label className="form-check-label" htmlFor="inlineRadio8">8</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio9" defaultValue="option9" />
                                <label className="form-check-label" htmlFor="inlineRadio9">9</label>
                            </div>
                            <div className="form-check form-check-inline  mr-4">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" defaultValue="option10" />
                                <label className="form-check-label" htmlFor="inlineRadio10">10</label>
                            </div>
                        </div>


                        <label className="mt-5">Comments (optional)</label>

                        <div className="input-group">

                            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                        </div>

                        <Link to="/admin"><button className="btn btn-info btn-block my-4" type="submit">Sign in</button></Link>


                    </form>
                </section>

            </div>
        )
    }
}

export default Form;