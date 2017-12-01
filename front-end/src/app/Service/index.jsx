import React from 'react'
import axios from 'axios'

class Service extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    const formData = {
      pickFName: this.requestForm.pickFName.value,
      pickLName: this.requestForm.pickLName.value,
      pickAddress: this.requestForm.pickAddress.value,
      pickPhone: this.requestForm.pickPhone.value,
      dropFName: this.requestForm.dropFName.value,
      dropLName: this.requestForm.dropLName.value,
      dropAddress: this.requestForm.dropAddress.value,
      dropPhone: this.requestForm.dropPhone.value,
      specialRequest: this.requestForm.specialRequest.value,
      status: "PENDING"
    };
    axios.post('http://localhost:8000/delivery', formData).then((response) => {
      window.location = 'tracking';   
  }).catch(error => {
      console.log('error', error);
    })
  }


  render() {
    return <div>
        <div className="backgroundMain">
          <div className="container">
            <form ref={self => {
                this.requestForm = self;
              }} onSubmit={this.submitForm}>
              <div className="panel panel-default">
                <div className="panel-body">
                  <p id="fillout">* Please fill in all of the fields *</p>

                  <div className="row" id="form">
                    <div className="col-sm-6 col-md-6">
                      <h3>Pick-Up</h3>

                      <div className="form-horizontal">
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="pickFName">
                            First Name:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="pickFName" placeholder="Jon" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="pickLName">
                            Last Name:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="pickLName" placeholder="Johnson" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="pickAddress">
                            Location:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="pickAddress" placeholder="Enter address" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="pickPhone">
                            Phone:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="pickPhone" placeholder="Enter phone" />
                          </div>
                        </div>
                      
                      </div>

                      <div className="spacing">
                        Package Type:
                        <select className="selectOptions">
                          <option value="choice1">Small Box</option>
                          <option value="choice2">Big Box</option>
                          <option value="choice3">Documents Box</option>
                          <option value="choice4">Envelope</option>
                          <option value="choice5">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6">
                      <h3>Drop-Off</h3>

                      <div className="form-horizontal">
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="dropFName">
                            First Name:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="dropFName" placeholder="Jon" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="dropLName">
                            Last Name:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="dropLName" placeholder="Johnson" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="dropAddress">
                            Location:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="dropAddress" placeholder="Enter address" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="dropPhone">
                            Phone:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" name="dropPhone" placeholder="Enter phone" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="control-label col-sm-3" for="specialRequest">
                            Comments:
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" id="specialRequest" name="" placeholder="Any special requests" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="container" id="terms-container">
                    <a href="">Terms & Conditions</a>
                    <br />
                    <input type="checkbox" id="terms" />I have read and agree to the Terms and Conditions agreement.
                  </div>

                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>;
  }
}

export default Service