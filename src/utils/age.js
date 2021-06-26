export const calculateAge = (birthDate) => {
    birthDate = new Date(birthDate);
    const otherDate = new Date(Date.now());
    let years = otherDate.getFullYear() - birthDate.getFullYear();
    if (
        otherDate.getMonth() < birthDate.getMonth() ||
        (otherDate.getMonth() === birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())
    ) {
        years--;
    }
    return years;
};
