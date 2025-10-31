import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useState } from 'react';
import { Tooltip } from './Tooltip';

export function LinksSocial() {
  const [, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    setIsCopied(true);

    copy('igocarvalho00@gmail.com');

    setInterval(() => {
      setIsCopied(false);
    }, 5000);
  }

  return (
    <div className="flex items-center flex-wrap gap-4">
      <Tooltip title="Link para meu LinkedIn">
        <a href="https://www.linkedin.com/in/igocarvalho/" title="LinkedIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#cdcdda"
            viewBox="0 0 256 256"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z"></path>
          </svg>
        </a>
      </Tooltip>
      <Tooltip title="Link para meu GitHub">
        <a href="https://github.com/IgoCarvalho" title="GitHub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#cdcdda"
            viewBox="0 0 256 256"
          >
            <path d="M216,104v8a56.06,56.06,0,0,1-48.44,55.47A39.8,39.8,0,0,1,176,192v40a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V216H72a40,40,0,0,1-40-40A24,24,0,0,0,8,152a8,8,0,0,1,0-16,40,40,0,0,1,40,40,24,24,0,0,0,24,24H96v-8a39.8,39.8,0,0,1,8.44-24.53A56.06,56.06,0,0,1,56,112v-8a58.14,58.14,0,0,1,7.69-28.32A59.78,59.78,0,0,1,69.07,28,8,8,0,0,1,76,24a59.75,59.75,0,0,1,48,24h24a59.75,59.75,0,0,1,48-24,8,8,0,0,1,6.93,4,59.74,59.74,0,0,1,5.37,47.68A58,58,0,0,1,216,104Z"></path>
          </svg>
        </a>
      </Tooltip>

      <div className="flex gap-2">
        <Tooltip title="Meu e-mail">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              id="email-address"
              className="border w-[225px] text-sm rounded-lg block pl-10 p-2.5  bg-zinc-700 border-zinc-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              readOnly
              value="igocarvalho00@gmail.com"
              disabled
            />
          </div>
        </Tooltip>

        <Tooltip title={isCopied ? 'Copiado!' : 'Copiar e-mail'}>
          <button
            title="Copiar"
            type="button"
            className="flex gap-2 items-center border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-2.5 bg-zinc-700 text-white border-gray-500 hover:bg-zinc-600 hover:border-zinc-500 focus:ring-zinc-700"
            onClick={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#cdcdda"
              viewBox="0 0 256 256"
            >
              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
            </svg>
            {/* Copiar */}
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
