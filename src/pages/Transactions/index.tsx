import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContaier,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContaier>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>19/04/2023</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 100,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>19/04/2023</td>
            </tr>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>19/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContaier>
    </div>
  )
}
