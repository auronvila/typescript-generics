
interface StatusProps{
    message:'success' | 'fail' | '404',
}

export default function Status(props:StatusProps) {
    let message;
    if(props.message === 'success'){
       message =  <h1>Success</h1>
    }else if(props.message === 'fail'){
        message = <h1>FAILED</h1>
    }else if(props.message === '404'){
        message = <h1>Not Found</h1>
    }


    return(
        <div>
            Status -{message}
        </div>
    )
}