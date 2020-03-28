import React, { Component } from 'react';

class CreateGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: '',
            student:''
        }

    }

    render() {
        return (
            <div>
                <div>
                    <label>
                        Pick your favorite flavor:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="groupName">Group Name</label>
                        <input type="text" className="form-control" id="groupName" placeholder="Group Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="groupName">Group Name</label>
                        <input type="text" className="form-control" id="groupName" placeholder="Group Name" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateGroup;