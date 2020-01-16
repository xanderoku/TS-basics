function cc(param: string | number) {
   if (typeof param === 'number') {
       return param.toFixed(2)
   }
   return param.trim()
}

class NewSuccess {
    header = 'success header'
    result = 'success result'
}

class NewError {
    header = 'error header'
    message = 'error message'
}

function handler(response: NewSuccess | NewError) {
    if (response instanceof NewSuccess) {
        return {
            status: 200,
            header: response.header,
            data: response.result
        }
    }
    return {
        status: 418,
        header: response.header,
        error: response.message
    }
}

type ButtonType = 'warning' | 'danger' | 'info'

function setButtonType(type: ButtonType) {
    //...
}

setButtonType('danger')
setButtonType('warning')
// err:
//setButtonType('foo')
