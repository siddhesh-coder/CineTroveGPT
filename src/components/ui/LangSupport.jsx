import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { LANGUAGE_OPTIONS, OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../utils/Store/Slices/langChange";

function LangSupport() {
  const dispatch = useDispatch();

  const handleLanguage = (langIdentifier) => {
    dispatch(changeLanguage(langIdentifier));
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {OPTIONS}
          <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {LANGUAGE_OPTIONS.map((langInfo) => (
              <Menu.Item key={langInfo.identifier}>
                <div
                  className="block px-4 py-2 text-sm text-gray-900 bg-gray-100 cursor-pointer"
                  onClick={() => handleLanguage(langInfo.identifier)}
                >
                  {langInfo.lang}
                </div>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default LangSupport;
