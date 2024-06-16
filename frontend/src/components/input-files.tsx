import React from "react";

interface InputFileProps {
  files: File[];
  setFiles: Function;
  label: string;
}

export function InputFile(props: InputFileProps) {
  return (
    <div>
      <label>
        <span className="flex flex-col items-start">{props.label}</span>
        <input
          multiple
          onChange={(e) => props.setFiles(e)}
          type="file"
          className="file-input file-input-sm file-input-bordered w-full max-w-xs"
        />
      </label>

      <ul>
        {props.files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
