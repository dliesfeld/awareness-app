/**
 * Add Content to the webpage DOM
 */

import {
    svgLabelNonValid,
    svgLabelValid,
    svgNotification,
    svgNotificationSucceed,
} from './svgImages'

/**
 * Remove an element from DOM by a given ID
 * @param containerID the value of the html id attribute.
 * @returns false if element was not deleted
 */
const resetDom = (containerID: string) =>
    document.getElementById(containerID)
        ? document.getElementById(containerID)?.remove()
        : false

/**
 * Add the green or read lable to the DOM if the user tippe the password
 * @param status true: green lable; false: red lable
 * @param htmlElement parent element for the lable
 */
const addLabelToDom = (status: boolean, htmlElement: Element) => {
    const label = document.createElement('div')
    label.id = 'phishing-awareness-extension-label'
    label.innerHTML = status ? svgLabelValid : svgLabelNonValid

    label.setAttribute(
        'style',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        `margin: ${htmlElement.offsetHeight / 2 - 8}px 0  0 ${
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            htmlElement.offsetWidth - 26
        }px;`
    )
    // for dem input element einfügen
    htmlElement.parentNode!.insertBefore(label, htmlElement)
}

/**
 * Add a Notification for compromised, weak password or for unsecure links
 * @param messageText messsage to display on the view
 */
const addWarningToDom = (messageText: string) => {
    const paddyContainer = document.createElement('div')
    const messageContainer = document.createElement('div')
    const message = document.createElement('p')
    const tigerContainer = document.createElement('div')
    const close = document.createElement('div')
    paddyContainer.id = 'phishing-awareness-extension-message'
    messageContainer.id = 'message-container'
    message.innerHTML = messageText
    tigerContainer.innerHTML = svgNotification

    close.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
        color="#f16666"
        >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg>`

    close.addEventListener('click', () => paddyContainer.remove())
    messageContainer.appendChild(message)
    paddyContainer.appendChild(messageContainer)
    paddyContainer.appendChild(tigerContainer)
    paddyContainer.appendChild(close)
    document.body.prepend(paddyContainer)

    messageContainer.setAttribute(
        'style',
        `top: ${tigerContainer.offsetHeight}px`
    )
    close.setAttribute(
        'style',
        `top: ${tigerContainer.offsetHeight}px; right: 0; position: absolute; margin: 0.5vh 0.25vw; cursor: pointer `
    )

    resetDom('phishing-awareness-extension-tip')
}

/**
 * Add a tip to the dom
 * @param tip The tip
 */
const addTipToDom = (tip: string) => {
    const tipContainer = document.createElement('div')
    const tipText = document.createElement('p')
    const svgContainer = document.createElement('div')
    const close = document.createElement('div')

    const prepareTip = tip.split(':')
    prepareTip[0] = `<b>${prepareTip[0]}:</b>`

    tipText.innerHTML = prepareTip.join('')
    svgContainer.innerHTML = svgNotificationSucceed
    tipContainer.id = 'phishing-awareness-extension-tip'
    close.innerHTML = `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        class="close"
                    >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                    </svg>`

    close.addEventListener('click', () => tipContainer.remove())
    tipContainer.appendChild(tipText)
    tipContainer.appendChild(svgContainer)
    tipContainer.appendChild(close)

    document.body.prepend(tipContainer)

    tipText.setAttribute('style', `top: ${tipContainer.offsetHeight}px`)
    close.setAttribute(
        'style',
        `top: ${tipContainer.offsetHeight}px; right: 0; position: absolute; margin: 0.5vh 0.5vw; cursor: pointer `
    )
}

export { addLabelToDom, addWarningToDom, resetDom, addTipToDom }
