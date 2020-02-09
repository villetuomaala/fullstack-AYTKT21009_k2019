import React from 'react'

const styles = {
  error: {
    color: 'red',
    fontSize: 16,
    border: 'solid 1px black',
    width: '100%',
    padding: '3px',
    backgroundColor: '#eaeaea',
    margin: '5px'
  },
  success: {
    color: 'green',
    fontSize: 16,
    border: 'solid 1px black',
    width: '100%',
    padding: '3px',
    backgroundColor: '#eaeaea',
    margin: '5px'
  }
}

const Notification = ({ message, type }) => 
  message === null ? null : 
    type === 'success' ? <div style={styles.success}>{message}</div> :
    type === 'error' ? <div style={styles.error}>{message}</div> :
    null

export default Notification