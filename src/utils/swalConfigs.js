export function SwalError(text, button) {
    return {
        text: text,
        icon: 'error',
        confirmButtonText: button,
        confirmButtonColor: '#1775D9'
    }
}

export function SwalSuccess(text) {
    return {
        icon: 'success',
        title: text,
        showConfirmButton: false,
        confirmButtonColor: '#1775D9',
        timer: 1500
    }
}
