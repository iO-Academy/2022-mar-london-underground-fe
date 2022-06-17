const StartDropdown = ({startStationList, handleStartSelect}) => {

    return (
        <div className="form-input">
            <label htmlFor="start-stations">Start</label>
            <select name="stations" id="start-stations" onChange={(event) => handleStartSelect(event.target.value)}>
                {startStationList.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        );
                    }
                )}
            </select>
        </div>
    );
}

export default StartDropdown;
