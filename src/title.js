'use strict'

import React from 'react'

const Title = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: {
        first: 'Sem',
        last: 'Sobrenome'
      }
    }
  },

  render: function () {
    return (
      <h1>Olá {`${this.props.name} ${this.props.lastname.first}`}</h1>
    )
  }
})

export default Title
