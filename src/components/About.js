
export default function About(props) {

    let myStyle = {
        backgroundColor: props.mode === 'light'?'white':'#0c233b',
        color: props.mode  === 'light'?'black':'white'
    }
 
    return (
        <>
            <div className='container' style={{color: props.mode  === 'light'?'black':'white'}}>
                <h2 className='my-3' >About</h2>
                <div id="accordion" >
                    <div className="card">
                        <div style={myStyle} className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button style={myStyle} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Analyse your text
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" >
                            <div className="card-body" style={myStyle}>
                               Textutils gives you a way to analyse your text quickly and efficiently. 
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo" style={myStyle}>
                            <h5 className="mb-0">
                                <button style={myStyle} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Free to use
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body" style={myStyle}>
                               Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div style={myStyle} className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button style={myStyle} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Browser Compatible
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body" style={myStyle}>
                                This word counter software works in nay web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blogs, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
