import React, { Component } from 'react';
import Aux from '../Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    errorConfirmedHandler = () => this.setState({ error: null })

    constructor(props){
      super(props)

      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });

        return req;
      })

      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error })
      });
    }

    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);

      axios.interceptors.response.eject(this.resInterceptor);
    }

    render(){
      return <Aux>
        <Modal show={this.state.error} onModalClosed={this.errorConfirmedHandler}>
          <div>
            {this.state.error ? this.state.error.message : null}
          </div>
        </Modal>

        <WrappedComponent {...this.props} />
      </Aux>
    }
  }
}

export default withErrorHandler;