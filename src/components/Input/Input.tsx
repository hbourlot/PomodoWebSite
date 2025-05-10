import styles from './styles.module.css';

type InputProps = {
	id: string;
	labelText?: string;
	// type: 'text' | 'number' | 'search'; /* Union type */
} & React.ComponentProps<'input'>; /* Intersection */

export const Input = ({ type, id, labelText, ...rest }: InputProps) => {
	return (
		<>
			<label htmlFor={id}>{labelText ?? labelText}</label>
			<input className={styles.input} id={id} type={type} {...rest} />
		</>
	);
};
