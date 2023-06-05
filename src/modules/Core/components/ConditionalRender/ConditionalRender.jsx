import { isArray } from 'lodash'
import { bool } from 'prop-types'

export const MainConditionRender = ({ children }) => children

export const FallbackConditionRender = ({ children }) => children

const ConditionalRender = ({ condition = true, children }) => {
  let mainChildren = children
  let fallbackChildren = null

  if (isArray(children)) {
    fallbackChildren = children.find(
      (element) => element?.type?.name === 'FallbackConditionRender'
    )
    mainChildren =
      children.filter(
        (element) =>
          element?.type?.name === 'MainConditionRender' ||
          element !== fallbackChildren
      ) ?? mainChildren
  }

  return condition ? <>{mainChildren}</> : <>{fallbackChildren}</>
}

ConditionalRender.propTypes = {
  condition: bool,
}

export default ConditionalRender
