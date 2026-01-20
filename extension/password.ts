/**
 * Component to handle the password check
 */

import { addLabelToDom, addWarningToDom, resetDom } from './domHandler'

import tips from './tips.json'
import policy from './policy.json'

/**
 * Prepare the notification before the notification is added to the dom
 * Add a week or compromised password to the passwordList
 * @param message the notification which is displayed in the browser
 * @param htmlElement DOM Anchor for the password lable
 */
const prepareNotification = (message: string, htmlElement?: Element) => {
    if (!htmlElement) {
        addWarningToDom(`${message}`)
    } else addLabelToDom(false, htmlElement)
}

/**
 * check the user password. and Add a notification to the DOM if the password compromised or weak.
 */
const passwortCheck = () => {
    const isConform = (input: string, regex: string) =>
        new RegExp(regex).test(input)

    const checkPolicyBeforeTyping = async (
        inputValue: string,
        elementID: string,
        htmlElement?: Element
    ) => {
        resetDom(elementID)

        if (inputValue.length === 0) return

        if (inputValue.length < 8) {
            prepareNotification(tips['PASSWORD.SHORT'], htmlElement)
            return
        }

        if (
            inputValue.length >= 8 &&
            inputValue.length < 20 &&
            !isConform(inputValue, policy.SHORT_COMPLEX.REGEX)
        ) {
            prepareNotification(tips['PASSWORD.4_CHARACTER_TYPES'], htmlElement)
            return
        }

        if (
            inputValue.length >= 20 &&
            !isConform(inputValue, policy.LONG_SIMPLE.REGEX)
        ) {
            prepareNotification(tips['PASSWORD.2_CHARACTER_TYPES'], htmlElement)
            return
        }

        if (htmlElement) {
            addLabelToDom(true, htmlElement)
        }
    }

    /*
     * Some webpages does not load the password input before the DOMContenLoaded event. For example pages with an virtual DOM can load the input later.
     * This code make sure that the input is loaded before the js code is executetd.
     */
    const isDomReady = () => {
        const fields = document.querySelectorAll('[type=password]')
        if (fields.length > 0) {
            fields.forEach((passwordInput) => {
                let typingTime: number
                passwordInput.addEventListener('input', () => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const { value } = passwordInput
                    checkPolicyBeforeTyping(
                        value,
                        'phishing-awareness-extension-label',
                        passwordInput
                    )
                    clearTimeout(typingTime)
                    typingTime = setTimeout(
                        () =>
                            checkPolicyBeforeTyping(
                                value,
                                'phishing-awareness-extension-message'
                            ),
                        1000
                    )
                })
            })
        } else {
            setTimeout(isDomReady, 1000)
        }
    }
    isDomReady()
}

export default passwortCheck
