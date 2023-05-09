const textObj = {
	ordertypeStayButton: ['Stay', 'לשבת'],
	ordertypeTogoButton: ['To Go', 'לקחת'],
};

const i18n = (lang: 'english' | 'hebrew', text: keyof typeof textObj) => {
	return textObj[text][lang === 'english' ? 0 : 1];
};

export default i18n;
