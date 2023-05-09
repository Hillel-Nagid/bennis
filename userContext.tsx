import { createContext, useState } from 'react';

type UserSettings = {
	language: 'english' | 'hebrew';
	orderType: 'to-go' | 'stay';
};
export const UserContext = createContext<
	[UserSettings, React.Dispatch<React.SetStateAction<UserSettings>>]
>([{ language: 'english', orderType: 'to-go' }, () => {}]);

export default function UserContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [userSettings, setUserSettings] = useState<UserSettings>({
		language: 'english',
		orderType: 'to-go',
	});
	return (
		<UserContext.Provider value={[userSettings, setUserSettings]}>
			{children}
		</UserContext.Provider>
	);
}
