import { useTaskContext } from "../../contexts/TaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export const Cycles = () => {
	const { state } = useTaskContext();

	const cycleStep = Array(state.currentCycle).fill(null);

	const cycleDescriptionMap = {
		workTime: "focus",
		shortBreakTime: "short break",
		longBreakTime: "long break",
	};

	return (
		<>
			<div className={`${styles.cycles}`}>
				<span>Cycles :</span>
				<div className={styles.cycleDots}>
					{cycleStep.map((_, index) => {
						const nextCycle = getNextCycle(index);
						const nextCycleType = getNextCycleType(nextCycle);
						return (
							<span
								key={`${nextCycleType}_${nextCycle}`}
								className={`${styles.cycleDot} ${styles[nextCycleType]}`}
								aria-label={`Indicator of ${cycleDescriptionMap[nextCycleType]} cycle`}
								title={`Indicator of ${cycleDescriptionMap[nextCycleType]} cycle`}
							></span>
						);
					})}
				</div>
			</div>
		</>
	);
};
