import {fireEvent, render, screen} from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import {renderWithTranslations} from "../../../../shared/lib/tests/renderWithTranslations/renderWithTranslations";

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslations(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    });
    test('test toggle', () => {
        renderWithTranslations(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    });
});