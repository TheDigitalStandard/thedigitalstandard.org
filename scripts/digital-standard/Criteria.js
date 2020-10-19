import React from 'react'
import PropTypes from 'prop-types'
// import parse from 'html-react-parser'
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm'

const Criteria = ({ criteria }) => {
  const { summary, indicators } = criteria
  const markdown = `A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done

  A table:

  | a | b |
  | - | - |
  `

  return (
    <>
      <div className="row standard-wrapper">
        <div className="col-12 col-lg-4 criteria-wrapper ">
          <div className="sticky-top">
            <h3 className="text-uppercase text-black-50 mr-4 mb-2">Criteria</h3>
            <p className="mt-3">{summary}</p>
          </div>
        </div>
        <div className="col-12 col-lg-8 indicator-wrapper">
          {indicators && indicators.map((item, index) => (
            <div className="row">
              <div className="col-12">
                <h4 className="text-uppercase text-black-50 mr-4 mb-2">Indicators</h4>
                <ul className="pt-3 ml-n3">
                  <li>{item.indicator}</li>
                </ul>
                {item.procedure && (
                  <div className="procedure-wrapper">
                    <h4 className="text-uppercase text-black-50 mr-4 mb-2">Procedure</h4>
                    {/* <ReactMarkdown plugins={[gfm]} children={markdown} className="md" /> */}
                    <div className="pl-3">{item.procedure}</div>
                  </div>
                )}
                {index !== indicators.length - 1 && <hr className="my-5" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

Criteria.propTypes = {
  criteria: PropTypes.instanceOf(Object)
}

export default Criteria
