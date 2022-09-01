import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';
/* import { useState } from 'react'; */


//Estado | State em React variável observada; Reconstrói o Elemento com o valo atualizado do estado
/* const [isWidgetOpen, setIsWidgetOpen] = useState(false)

function toggleWidgetVisibility() {
	setIsWidgetOpen(!isWidgetOpen);
} 
{ isWidgetOpen ? <p>Zelmar Junior</p> : null }
ou { isWidgetOpen && <p>Zelmar Junior</p> } se for verdade ele executa o resto se não não
*/
export function Widget() {
	return (
		<Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8  flex flex-col items-end">
			<Popover.Panel>
				<WidgetForm />
			</Popover.Panel>
			<Popover.Button className="group flex items-center bg-brand-500 rounded-full px-3 h-12 text-white">
				<ChatTeardropDots className="w-6 h-6" />
				<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-400 ease-linear">
					<span className='pl-2'></span>
					Feedback
				</span>
			</Popover.Button>
		</Popover>
	)
}