import React, {useState} from 'react';
import Modal from './styles';
import CloseIcon from '../../../../assets/images/close-icon.png'
import { Button, Input } from '../../../../components';

interface Props {
    showModal: boolean;
    assigment: number;
    onClose: () => void;
}
const ModalAssesment = ({
    showModal,
    assigment,
    onClose
}: Props) => {
    const [input, setInput] = useState<string>('');
    const [valueAnswer, setValueAnswer] = useState<string>('');

    const handleExecute = () => {
        if(assigment == 1) {
            const numbers = input.trim().split(/\s+/).map(Number);
            if (numbers.length !== 5 || numbers.some(isNaN) || numbers.some((num) => num <= 0)) {
                alert('Please enter 5 integer.');
                return false;
            }
            numbers.sort((a, b) => a - b);
            const minSum = numbers.slice(0, 4).reduce((acc, cur) => acc + cur, 0);
            const maxSum = numbers.slice(1).reduce((acc, cur) => acc + cur, 0);
            setValueAnswer(`${minSum} ${maxSum}`);
        } else if( assigment == 2) {
            const ratio = input.trim().split(",").map(Number)

            if (ratio.length === 0) {
                return null;
            }
    
            let positiveCount = 0;
            let negativeCount = 0;
            let zeroCount = 0;
    
            for (const num of ratio) {
                if (num > 0) {
                    positiveCount++
                } else if (num < 0) {
                    negativeCount++
                } else {
                    zeroCount++
                }
            }
    
            const totalCount = ratio.length;
            const positiveRatio = positiveCount / totalCount;
            const negativeRatio = negativeCount / totalCount;
            const zeroRatio = zeroCount / totalCount;
    
            setValueAnswer(`${positiveRatio.toFixed(6)} - ${negativeRatio.toFixed(6)} - ${zeroRatio.toFixed(6)}`);
        } else {
            const timePattern = /^(0?[1-9]|1[0-2]):([0-5][0-9])(:([0-5][0-9]))?(AM|PM)$/i;

            if (!timePattern.test(input)) {
                alert("Invalid time format");
                return false;
            }
            const period= input.replace(/[^a-zA-Z]/g, '');
    
            const [time] = input.split(period);
            const [hours, minutes, seconds] = time.split(":").map(Number);
    
            let militaryHours = hours;
            if (period === "PM" && hours !== 12) {
                militaryHours += 12;
            } else if (period === "AM" && hours === 12) {
                militaryHours = 0;
            }
    
            setValueAnswer(`${String(militaryHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}${seconds ? `:${String(seconds).padStart(2, "0")}` : ""}`)
        }
    }


    return (
        <Modal.Container show={showModal}>
            <Modal.Card>
                <Modal.Header>
                    <Modal.TitleHeader>
                        {`Assesment ${assigment}`}
                    </Modal.TitleHeader>
                    <Modal.IconClose src={CloseIcon} onClick={onClose}/>
                </Modal.Header>
                <Modal.TitleContent>
                    {assigment === 1 ?
                     'Input 5 Integer with space of Integer (1 1 1 1 1)' :
                     assigment === 2 ? 'Enter array of integers ([-13, 0, -13, 8])':
                     'Enter 12-hour time (10:10:31PM)'
                    }
                </Modal.TitleContent>
                <Modal.Content>
                    <Modal.Form>
                        <Input 
                            value={input} 
                            variant={'default'}
                            placeholder={'Input'}
                            setValue={(e: string) => setInput(e)}
                        />

                        <Button
                            mode={'default'}
                            title={'Execute'}
                            variant={'primary'}
                            onClick={handleExecute}
                        />

                        <Button
                            mode={'default'}
                            title={'Reset'}
                            variant={'secondary'}
                            onClick={() => {
                                setInput('');
                                setValueAnswer('')
                            }}
                        />
                    </Modal.Form>
                </Modal.Content>
                <Modal.Answer>
                    <Modal.TitleAnswer>
                    {assigment === 1 ?
                     'The Minimum & Maximum Sums' :
                     assigment === 2 ? 'Ratios Output':
                     'Result in 24-hour time'
                    }
                    </Modal.TitleAnswer>
                    <Modal.ValueAnswer>
                        {valueAnswer}
                    </Modal.ValueAnswer>
                </Modal.Answer>
            </Modal.Card>
        </Modal.Container>
    )
}

export default ModalAssesment;